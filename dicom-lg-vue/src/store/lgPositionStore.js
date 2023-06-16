import { defineStore } from "pinia";
import LgPositionControler from "@/controller/lgPositionController";
const _lgPositionController = new LgPositionControler();

export const useLgPositionStore = defineStore('lgPosition', {
    state(){
        return {
            lg1: '',
            lg2: '',
            lg3: '',
        }
    },

    actions: {
        getPositions(){
            _lgPositionController.getPosition('http://localhost:7171/api/lgPosition')
        }
    }
})