module.exports = (affiliates) => {
    const modifiedAffiliates = [];
    affiliates.forEach( affiliate => {
        let highestTier = '';

        if (!affiliate['all_tiers']) {
            affiliate['highest_tier'] = highestTier;
        } else {
            const tiersSet = affiliate['all_tiers'].split(',');

            if (tiersSet.includes('Diamond')) {
                highestTier = 'Diamond';
            } else if (tiersSet.includes('Gold')) {
                highestTier = 'Gold';
            } else if (tiersSet.includes('Silver')) {
                highestTier = 'Silver';
            } else if (tiersSet.includes('Bronze')) {
                highestTier = 'Bronze';
            }

            affiliate['highest_tier'] = highestTier;
        }

        modifiedAffiliates.push(affiliate);

    });

    return modifiedAffiliates;
};