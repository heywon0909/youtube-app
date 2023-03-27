import { createContext, useContext } from 'react';
import FakeYoutube from '../api/fakeYoutube';

export const YoutubeApiContext = createContext();
export function YoutubeApiProvider({ children }) {
    const youtube = new FakeYoutube();
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}