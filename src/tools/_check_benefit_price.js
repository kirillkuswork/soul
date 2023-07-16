const checkBenefitPrice = (item) => {
    if(item.mainBenefit.benefitPrice !== undefined) {
        return item.mainBenefit.benefitPrice;
    } else {
        return item.price;
    }
}

export default checkBenefitPrice;