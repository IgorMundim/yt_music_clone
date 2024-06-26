import { useState } from "react";
import { Page } from "../types/page";

const usePage = () => {
    const [page, setPage] = useState<Page>({openMenu: true})

    const updatePage = (newPage: {openMenu: boolean}) => {
        setPage(newPage);
    }
    return [page, updatePage] as const;
}
export default usePage;