declare global {
    interface Window {
        dataLayer: {
            event: string,
            eventCategory: string,
            eventAction: string,
            eventLabel: string
        }[]
    }
}
export {};