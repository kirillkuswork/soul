export const editSectionNames = (sections): string => {
    const sectionsArr = sections.filter(section => section.active).map(section => `Корп.  ${section.value}`);
    return sectionsArr?.join(', ');
};
