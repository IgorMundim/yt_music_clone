export interface Page {
    openMenu: boolean
}
export interface PageContextType {
    page: Page;
    updatePage: (newPage: Page) => void;
  }