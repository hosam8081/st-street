import { Box } from '@mui/material'
import { MainColors } from '../../style/theme'

interface AppliedFilter {
  text: string
}
const AppliedFilter = ({text}: AppliedFilter) => {
  return (
    <Box sx={{background:MainColors.primary[600], display:"inline", padding:"1px 6px", borderRadius:'5px'}}>{text} x</Box>

  )
}

export default AppliedFilter