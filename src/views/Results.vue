<template>
  <div class="results">
    <h2>Competition Highlights 🏆</h2>
    <div class="container">
      <div>
        <div>
          <h3>Australia 🇦🇺</h3>
          <a class="link" target="_blank" href="https://docs.google.com/spreadsheets/d/1OGnbFMMwJOlKH1UvnUNvrrL-Al9jRyybIl4j4kL6AOc/htmlview#">9th Australian Boulder Nationals @ Sydney Indoor Climbing Gym St. Peters, Sydney - 18/11/2022 </a>
          <a class="link" target="_blank" href="https://docs.google.com/spreadsheets/d/1ETzKLzNZ2AJxjtfgd2Gp0g7P11cBBgwStdsDNUrXbqY/edit?usp=sharing&fbclid=IwAR2K0EDGeanTu8f3Iv9ob6dutGLqVesFRkrh48NTbUg6QSIntdlBPHWM00A">5th VIC Boulder State Titles @ Boulder Lab, Ferntree Gully - 15/10/2022 </a>
          <a class="link" target="_blank" href="https://sportclimbingsa.com/wp-content/uploads/2022/09/22-SA-Boulder-ONLINE.pdf">4th SA Boulder State Titles @ Beyond Bouldering, Adelaide - 17/09/2022 </a>
          <a class="link" target="_blank" href="https://www.facebook.com/photo/?fbid=5296849010427638&set=pcb.5296849153760957">3rd TAS Boulder State Titles @ Beta Park, Launceston - 20/08/2022 </a>
          <a class="link" target="_blank" href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/StateLeadResultsSCSA2022.pdf">1st SA Lead State Titles @ VRC, Adelaide - 14/05/2022 </a>
          <a class="link" target="_blank" href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/2022%20Open%20Boulder%20selection%20results.pdf">9th Boulder National Selection Event @ Nomad, Sydney - 26/02/2022</a>
          <a class="link" target="_blank" href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/21%20-%20NSW_ACT%20-%20Boulder%20-%20Results.pdf">5th NSW/ACT Boulder State Titles @ Skywood, Sydney - 22/01/2022</a>
          <a class="link hide" target="_blank" href="https://sportclimbingsa.com/wp-content/uploads/2022/01/2021-SA-State-Boulder-Titles-Results.pdf">7th SA Boulder State Titles @ Beyond Bouldering, Adelaide - 23/10/2021</a>
        </div>
        <div>
          <h3 style="margin-top: 2.5rem">Canada 🇨🇦</h3>
          <a class="link" target="_blank" href="https://squamishclimbingmagazine.ca/final-results-2015-youth-bouldering-nationals/">2nd Youth Boulder Nationals @ Climbers Rock, Burlington - 13/02/2015</a>
        </div>
        <div>
          <h3 style="margin-top: 2.5rem">International 🌎</h3>
          <a class="link" target="_blank" href="https://www.ifsc-climbing.org/index.php/world-competition/calendar/?task=resultathletes&event=898&result=7">58th IFSC Worldcup @ Toronto, CA - 31/05/2015</a>
          <a class="link" target="_blank" href="https://www.ifsc-climbing.org/index.php/world-competition/calendar/?task=resultathletes&event=910&result=27">44th IFSC Youth World Championships @ Arco, Italy - 06/09/2015</a>
        </div>
      </div>
      <div class="img">
        <img src="/images/climbingBeyond.jpeg" class="pic" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';



</script>


<style scoped lang="scss">
@import '../scss/mixins.scss';

.results {
  color: var(--darkPurple);
  margin-top: 2rem;
}

.link {
  font-weight: 500;
  display: block;
  cursor: pointer;
  text-decoration: none;
  margin: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  @include mobile {
    margin: 0.8rem 0.5rem;
  }
}

.container {
  display: flex;
  justify-content: space-between;

  @include mobile {
    flex-direction: column;
  }
}

h2 {
  margin-bottom: 1rem;
}

.hide {
  display: none;
}

.img {
  position: relative;
  width: 30vw;
  height: fit-content;
  object-fit: contain;

  &:after {
    position: absolute;
    content: 'Photo by Jasper Hose';
    bottom: 0;
    right: 5px;
    color: black;
    font-size: 0.7rem;
  }

  @include mobile {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
