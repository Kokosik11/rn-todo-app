import {IAction} from "../type/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (actions: IAction[]) => {
    try {
        const value = await AsyncStorage.getItem('@actions');

        await AsyncStorage.setItem('@actions', JSON.stringify(actions));
        console.log(value)
    } catch (error) {
        console.log(error)
    }
}

export const getData = async (): Promise<IAction[] | null> => {
    try {
        const value = await AsyncStorage.getItem('@actions');
        console.log(value)
        if(value !== null) {
            return JSON.parse(value);
        }
        return null;
    } catch (e) {
        console.log(e);
        return null;
    }
}