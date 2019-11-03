import { useStore } from "./Context";
import axios from 'axios'

const useUser = () => {
  const [state, setState] = useStore();

  function addUser(user) {
    const users = [...state, user];
    setState(state => ({ ...state, users }));
  }

  async function getUser() {
    const loggedInUser = await axios.get(`/getuser`)
    addUser(loggedInUser)
  }

  return {
    names: state,
    addUser
  }
};

export default useUser