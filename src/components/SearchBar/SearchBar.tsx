import { useSearchFn } from "@components/SearchBar/useSearchFn";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { SearchSuggestion } from "@components/SearchSuggestion/SearchSuggestion";

interface ISearchBarProps {
  dataAssemble: any;
}

export const SearchBar = (props: ISearchBarProps) => {
  const { dataAssemble } = props;
  const navigate = useNavigate();
  const {
    searchSuggestionRef,
    showSuggestionFn,
    searchString,
    setSearchString,
    setShowSearchSuggestion,
    showSearchSuggestion,
  } = useSearchFn();

  return (
    <Box ref={searchSuggestionRef}>
      <Paper
        component="div"
        sx={{ p: "2px 4px", width: 600 }}
        className="flex items-center relative"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            showSuggestionFn(e.target.value.trim().length);
            setSearchString(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.length > 0) {
              navigate(`/search?q=${searchString}`);
              setShowSearchSuggestion(false);
            }
          }}
          value={searchString}
          onFocus={(e) => {
            showSuggestionFn(e.target.value.trim().length);
          }}
        />
        {searchString.length > 0 && (
          <IconButton
            type="button"
            className="p-3"
            aria-label="clear"
            onClick={() => {
              setSearchString("");
              showSuggestionFn(0);
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
        <IconButton
          type="button"
          className="p-3"
          aria-label="search"
          onClick={() => {
            if (searchString.length > 0) navigate(`/search?q=${searchString}`);
          }}
        >
          <SearchIcon />
        </IconButton>
        {showSearchSuggestion && <SearchSuggestion dataAssemble={dataAssemble} />}
      </Paper>
    </Box>
  );
};
