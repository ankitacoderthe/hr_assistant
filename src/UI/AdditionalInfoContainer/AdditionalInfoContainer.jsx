import AdditionalDiv from '../../Components/AdditionalDivs/AdditionalDiv'
const AdditionalInfoContainer = (props) => {
  return (
    props?.data?.map((element, index) => (
      <AdditionalDiv inx={index} key={index} title={element.title} value={element.value} />
    ))
  )
}
export default AdditionalInfoContainer