import {config, appFetch, setServiceToken, getServiceToken, removeServiceToken, setReauthenticationCallback} from './appFetch';

export const addFood = (food, onSuccess, onErrors) =>
    appFetch('/food/addFood', config('POST', food),
        onSuccess, 
        onErrors);

export const getFoodGroups = (onSuccess) => 
        appFetch('/food/foodGroups', config('GET', null), onSuccess);

export const getNutrientMeasureUnits = (onSuccess) => 
        appFetch('/food/nutrientMeasureUnits', config('GET', null), onSuccess);

export const findFoods = ({page}, onSuccess) => {
        appFetch(`/food/listFoods?page=${page}`, config('GET', null), onSuccess);
}
        
export const findFoodsKeywords = ({foodGroupId,keywords, page}, onSuccess) => 
        appFetch(`/food/listSearchFoods?foodGroupId=${foodGroupId}&keywords=${keywords}&` +
                `page=${page}`, config('GET', null), onSuccess);
    
export const findFoodById = (id, onSuccess) => 
        appFetch(`/food/foodFind/${id}`, config('GET', null), onSuccess);

export const deleteFood = ({foodId, page, keywords,foodGroupId}, onSuccess) => {
            appFetch(`/food/${foodId}/removeFood?foodGroupId=${foodGroupId}&keywords=${keywords}&` +
                `page=${page}`, config('GET', null), onSuccess);
        }