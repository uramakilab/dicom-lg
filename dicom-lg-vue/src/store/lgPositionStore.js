import { defineStore } from "pinia";
import LgPositionControler from "@/controller/lgPositionController";
const _lgPositionController = new LgPositionControler();

export const useLgPositionStore = defineStore('lgPosition', {
    state() {
        return {
            positioning: {},
            images: null,
        }
    },

    actions: {
        async getPositions() {
            this.positioning = await _lgPositionController.getPosition('http://localhost:7171/api/lgPosition')
        },

        async getImages(serieId) {
            this.images = await _lgPositionController.getImages(`http://localhost:7171/api/lgPosition/${serieId}`)
        },
    }
})