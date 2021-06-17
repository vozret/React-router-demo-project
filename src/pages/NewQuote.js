import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // use History -> a hook which changes the history of pages
  // returns an object
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    // if we send our data here, we eill be directed back to the "quotes" page
    console.log(quoteData);

    // history.push -> pushes a new page on the stack of pages, has a "back" button
    // history.replace -> replaces a certain page, can't go back, redirect
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
