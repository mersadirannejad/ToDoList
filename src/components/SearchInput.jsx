import { Checkbox, Search } from '@carbon/react';
Checkbox
const SearchInput = ({handleSearch}) => {
    return (
        <>
            <h5 style={{ padding: "0.5rem 0.5rem 0.5rem 0" }}>Search Todo</h5>
            <div
            >
                <Search
                    style={{padding:'1.5rem 2.5rem'}}
                    closeButtonLabelText="Clear search input"
                    id="search-playground-1"
                    labelText="Label text"
                    placeholder="Search todo"
                    playgroundWidth={300}
                    onChange={handleSearch}
                    size="md"
                    type="text"
                />
            </div>
        </>
    )
}

export default SearchInput