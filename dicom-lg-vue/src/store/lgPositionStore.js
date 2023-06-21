import { defineStore } from "pinia";
import LgPositionControler from "@/controller/lgPositionController";
const _lgPositionController = new LgPositionControler();

export const useLgPositionStore = defineStore('lgPosition', {
    state(){
        return {
            positioning: {},
        }
    },

    actions: {
        async getPositions() {
            this.positioning = await _lgPositionController.getPosition('http://localhost:7171/api/lgPosition')
        }
    }
})