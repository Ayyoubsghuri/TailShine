import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader2 = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={560}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="176" rx="2" ry="2" width="220" height="68" /> 
    <rect x="8" y="49" rx="2" ry="2" width="140" height="10" /> 
    <rect x="8" y="73" rx="2" ry="2" width="171" height="50" /> 
    <rect x="8" y="141" rx="0" ry="0" width="207" height="19" />
  </ContentLoader>
)

export default MyLoader2

