import { QueryClient } from "react-query";

export const queryClientConfig = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 0, // reintentos si falla
         // refetchOnWindowFocus: 'always', // reintenta si cambia de pestaña
         refetchOnWindowFocus: false, // reintenta si cambia de pestaña
         // notifyOnChangePropsExclusions: ['isStale'] // indicar que no notifique cuando la cache deja de ser valida
      },
   },
});