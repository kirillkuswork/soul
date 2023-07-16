import {getLabel} from "./_get-label";

export const generateLabels = (sectionNumber) => {
    const labels = []
    const sides = ['left', 'right', 'top', 'bottom']

    sides.forEach((side) => {
        labels.push({label: getLabel(sectionNumber, side), side})
    })

    return labels
}