<script>
import { store } from "../store.js";

export default {
    name: 'DropDown',
    data() {
        return {
            store,
            emptyString: "",
        }
    },
    methods: {
        // archSelectFunc(string) {
        //     store.archSelect = string;
        // }
    },
}

</script>

<template>
    <!-- MODEL FROM BOOTSTRAP -->

    <!-- need to uncomment:
        - methods: archSelectFunc(string)
        - style: .dropdown-menu{} -->

    <!-- <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle my-3 bg-white text-black" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Select archetype...
        </button>
        <ul class="dropdown-menu">
            <li @click="archSelectFunc(this.emptyString)" @click.prevent="$emit('archSelected')"><a class=" dropdown-item"
                    href="#">All</a>
            </li>
            <li v-for="(item, idx) in store.archList" :key="idx" @click="archSelectFunc(item.archetype_name)"
                @click.prevent="$emit('archSelected')">
                <a class=" dropdown-item" href="#">{{ item.archetype_name
                }}</a>
            </li>
        </ul>
    </div> -->

    <!-- SELECT MENU -->
    <select name="archetypes" id="archetype-select" v-model="store.archSelect" @change="$emit('archSelected')"
        class="btn btn-secondary btn-sm dropdown-toggle my-3 bg-white text-black">
        <!-- Option to reset -->
        <option value="">Select all</option>
        <!-- List of archetypes -->
        <option v-for="(item, idx) in store.archList" :key="idx" :value="item.archetype_name">{{ item.archetype_name }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
/* .dropdown-menu {
     max-height: 250px;
     overflow: scroll;
 } */
</style>