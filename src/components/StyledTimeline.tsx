import { styled } from "@material-ui/core";
import { Timeline } from "rsuite";

const StyledTimeline = styled(Timeline)(({ theme }) => ({
  marginTop: 50,
  "& .rs-timeline-item-dot::before": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .rs-timeline-item-tail": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& .rs-timeline-item-custom-dot .rs-icon": {
    borderWidth: 2,
    borderStyle: "solid",
    color: theme.palette.primary.main,
    background: theme.palette.background.default,
    top: 0,
    left: -2,
    width: 40,
    height: 40,
    fontSize: 18,
    paddingTop: 9,
    marginLeft: -13,
    borderRadius: "50%",
    position: "absolute",
  },
  "& .rs-timeline-item-content": {
    marginLeft: 24,
  },
  "& h5": {
    paddingTop: 10,
  },
}));

export default StyledTimeline;
