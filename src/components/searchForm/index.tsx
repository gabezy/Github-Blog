import { SearchFormContainer, SearchFormInput } from "./styles";

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <SearchFormInput type={"text"} placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
};
