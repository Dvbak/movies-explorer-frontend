import { DesctopScreen, LotCardLessDS, LotCardMS, LotCardMoreDS, LotCardTS, MobileScreen, StepDS, StepMS, StepTS, TabletScreen } from "./constants";

function showCards() {

  const counter = { lot: LotCardMoreDS, step: StepDS }
    if (window.innerWidth < DesctopScreen) {
      counter.lot = LotCardLessDS
      counter.step = StepTS
    }
    if (window.innerWidth < TabletScreen) {
      counter.lot = LotCardTS
      counter.step = StepMS
    }
    if (window.innerWidth < MobileScreen) {
      counter.lot = LotCardMS
      counter.step = StepMS
    }
    return counter
}

export default showCards;
