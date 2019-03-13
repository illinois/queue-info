import React from "react";
import formatDate from "date-fns/format";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const PostDate = ({ date }) => (
  <>
    {formatDate(date, "dddd, MMMM Do YYYY")} (
    {distanceInWordsToNow(date, {
      addSuffix: true
    })})
  </>
);

export default PostDate;
