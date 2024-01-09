import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    apiArchURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archList: [],
    archSelect: "",
    searchText: '',
    loading: true,
});