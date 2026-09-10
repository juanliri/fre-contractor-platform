/**
 * F.R.E. CONTRACTOR L.L.C. — Interactive Cost Estimator Engine
 * Real-time calculation for:
 * 1. Interior Painting (per room)
 * 2. Cabinet Refinishing (per door/drawer)
 * 3. Popcorn Ceiling Removal (per sqft)
 * 4. Commercial Turnover (per sqft)
 */

document.addEventListener("DOMContentLoaded", () => {
    const typeInputs = document.querySelectorAll('input[name="project_type"]');
    const typeLabels = document.querySelectorAll(".type-option-label");
    
    // Sliders & value displays
    const roomsGroup = document.getElementById("group-rooms");
    const sliderRooms = document.getElementById("slider-rooms");
    const valRooms = document.getElementById("val-rooms");

    const sqftGroup = document.getElementById("group-sqft");
    const sliderSqft = document.getElementById("slider-sqft");
    const valSqft = document.getElementById("val-sqft");

    const cabinetsGroup = document.getElementById("group-cabinets");
    const sliderCabinets = document.getElementById("slider-cabinets");
    const valCabinets = document.getElementById("val-cabinets");

    const prepGroup = document.getElementById("group-prep");
    const selectPrep = document.getElementById("select-prep");

    // Output displays
    const outMin = document.getElementById("out-min-price");
    const outMax = document.getElementById("out-max-price");
    const unlockBtn = document.getElementById("btn-unlock-estimate");

    // Calculation rates (NYC Tri-State industry baseline)
    const RATES = {
        interior_paint: {
            minPerRoom: 450,
            maxPerRoom: 850,
            prepMultipliers: { standard: 1.0, moderate: 1.25, heavy: 1.55 }
        },
        cabinets: {
            minPerDoor: 75,
            maxPerDoor: 135,
            prepMultipliers: { standard: 1.0, moderate: 1.15, heavy: 1.35 }
        },
        popcorn_removal: {
            minPerSqft: 3.25,
            maxPerSqft: 5.50,
            prepMultipliers: { standard: 1.0, moderate: 1.2, heavy: 1.45 }
        },
        commercial_turnover: {
            minPerSqft: 1.85,
            maxPerSqft: 3.20,
            prepMultipliers: { standard: 1.0, moderate: 1.2, heavy: 1.4 }
        }
    };

    let currentType = "interior_paint";

    function updateVisibility() {
        if (currentType === "interior_paint") {
            roomsGroup.style.display = "block";
            sqftGroup.style.display = "none";
            cabinetsGroup.style.display = "none";
            prepGroup.style.display = "block";
        } else if (currentType === "cabinets") {
            roomsGroup.style.display = "none";
            sqftGroup.style.display = "none";
            cabinetsGroup.style.display = "block";
            prepGroup.style.display = "block";
        } else if (currentType === "popcorn_removal" || currentType === "commercial_turnover") {
            roomsGroup.style.display = "none";
            sqftGroup.style.display = "block";
            cabinetsGroup.style.display = "none";
            prepGroup.style.display = "block";
        }
    }

    function calculateEstimate() {
        const prepMultiplier = RATES[currentType].prepMultipliers[selectPrep.value] || 1.0;
        let minTotal = 0;
        let maxTotal = 0;

        if (currentType === "interior_paint") {
            const rooms = parseInt(sliderRooms.value, 10);
            valRooms.textContent = `${rooms} ${rooms === 1 ? 'Room' : 'Rooms'}`;
            minTotal = rooms * RATES.interior_paint.minPerRoom * prepMultiplier;
            maxTotal = rooms * RATES.interior_paint.maxPerRoom * prepMultiplier;
        } else if (currentType === "cabinets") {
            const doors = parseInt(sliderCabinets.value, 10);
            valCabinets.textContent = `${doors} Doors / Drawers`;
            minTotal = doors * RATES.cabinets.minPerDoor * prepMultiplier;
            maxTotal = doors * RATES.cabinets.maxPerDoor * prepMultiplier;
        } else if (currentType === "popcorn_removal") {
            const sqft = parseInt(sliderSqft.value, 10);
            valSqft.textContent = `${sqft.toLocaleString()} Sq.Ft.`;
            minTotal = sqft * RATES.popcorn_removal.minPerSqft * prepMultiplier;
            maxTotal = sqft * RATES.popcorn_removal.maxPerSqft * prepMultiplier;
        } else if (currentType === "commercial_turnover") {
            const sqft = parseInt(sliderSqft.value, 10);
            valSqft.textContent = `${sqft.toLocaleString()} Sq.Ft.`;
            minTotal = sqft * RATES.commercial_turnover.minPerSqft * prepMultiplier;
            maxTotal = sqft * RATES.commercial_turnover.maxPerSqft * prepMultiplier;
        }

        // Round to nearest $10
        minTotal = Math.round(minTotal / 10) * 10;
        maxTotal = Math.round(maxTotal / 10) * 10;

        outMin.textContent = `$${minTotal.toLocaleString()}`;
        outMax.textContent = `$${maxTotal.toLocaleString()}`;

        // Save current calculated state on window for the lead capture modal
        window.__CURRENT_ESTIMATE__ = {
            project_type: currentType,
            min_price: minTotal,
            max_price: maxTotal,
            prep: selectPrep.value,
            rooms: sliderRooms.value,
            cabinets: sliderCabinets.value,
            sqft: sliderSqft.value
        };
    }

    // Type selector listener
    typeInputs.forEach(input => {
        input.addEventListener("change", (e) => {
            currentType = e.target.value;
            typeLabels.forEach(lbl => lbl.classList.remove("active"));
            e.target.closest(".type-option-label").classList.add("active");
            updateVisibility();
            calculateEstimate();
        });
    });

    // Slider & select listeners
    if (sliderRooms) sliderRooms.addEventListener("input", calculateEstimate);
    if (sliderSqft) sliderSqft.addEventListener("input", calculateEstimate);
    if (sliderCabinets) sliderCabinets.addEventListener("input", calculateEstimate);
    if (selectPrep) selectPrep.addEventListener("change", calculateEstimate);

    // Initial run
    updateVisibility();
    calculateEstimate();

    // Trigger Lead Capture modal when user wants to lock/unlock detailed itemization
    if (unlockBtn) {
        unlockBtn.addEventListener("click", () => {
            if (window.openEstimateModal) {
                window.openEstimateModal(window.__CURRENT_ESTIMATE__);
            }
        });
    }
});
