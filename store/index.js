import Vuex from "vuex";
import Container from "./modules/container";
import { reviews } from "../../performance.agentsoncloud.com/store/modules/reviews";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      Container,
      reviews
    },
  });
};

export default createStore;
