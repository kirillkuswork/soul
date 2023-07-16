export const getLabel = (sectionNumber, side) => {
    switch (side) {
        case 'left': {
            if (sectionNumber === 1 || sectionNumber === 2) {
                return 'Вид на город'
            }
            return ''
        }
        case 'right': {
            if (sectionNumber === 1 || sectionNumber === 2) {
                return 'Вид во двор; Изофабрика'
            }
            return ''
        }
        case 'top': {
            if (sectionNumber === 1) {
                return 'Вид во двор'
            }
            if (sectionNumber === 2) {
                return 'Вид на город'
            }
            return ''
        }
        case 'bottom': {
            if (sectionNumber === 1) {
                return 'Вид на город; ул.Часовая'
            }
            if (sectionNumber === 2) {
                return 'Вид во двор'
            }
            return ''
        }
        default:
            return ''
    }
}