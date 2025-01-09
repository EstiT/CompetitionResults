<template>
  <div class="results">
    <h2>Competition {{ showAll ? "Results" : "Highlights" }} 🏆<span class="link" @click="showAll = !showAll">{{ showAll
      ?
      '(Hide)' : '(See all)' }}</span></h2>
    <div class="container">
      <div>
        <div class="aus-results">
          <h3>Australia 🇦🇺 </h3>
          <h4 :class="{ hide: !showAll }">2024</h4>
          <a class="link" target="_blank"
            href="https://docs.google.com/spreadsheets/d/19MNsKoP-io0o9mzyO2_Aw6YotQJLJM__TDbpeVLIllI/edit?gid=2130885351#gid=2130885351">8th
            Oceania Lead Championships @ Elevate Climbing, Sydney
            - 6/12/2024</a>
          <a :class="{ hide: !showAll }" class="link" target="_blank"
            href="https://docs.google.com/spreadsheets/d/1dB5wrw2ZysFq_KWixUMfmu6U3NH4ohOF8XKjbWFCgQc/edit?gid=1341091134#gid=1341091134">17th
            Oceania Boulder Championships @ Port Side Boulders, Perth
            - 16/11/2024</a>
          <a :class="{ hide: !showAll }" class="link nolink" target="_blank">4th
            20th Birthday Social Comp @ Urban Climb, Adelaide
            - 25/10/2024</a>
          <a class="link" target="_blank"
            href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202024/24-%20SA%20-%20Boulder.pdf">3rd
            SA State Titles @ Beyond Bouldering, Keswick
            - 15/09/2024</a>
          <a :class="{ hide: !showAll }" class="link" target="_blank"
            href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202024/2024%20NSW%20-%20Boulder.pdf">12th
            NSW State Titles @ Skywood Climbing, Sydney
            - 7/09/2024</a>
          <a :class="{ hide: !showAll }" class="link" target="_blank"
            href="https://www.instagram.com/p/C-1fV2hCpBj/">4th Olympic Style Competition @ Beyond Bouldering, Adelaide
            - 16/08/2024</a>
          <h4 :class="{ hide: !showAll }">2023</h4>
          <a class="link" target="_blank"
            href="https://docs.google.com/spreadsheets/u/2/d/12RqJEGdUYp75H5inPm2_GuGcleUBY28bIAKEAr7Ad0k/htmlview#">9th
            National Lead Selection Event @ Cliffhanger Climbing Gym, Melbourne - 06/10/2023 </a>
          <p :class="{ hide: !showAll }" class="link nolink" href="">2nd Birthday Competition @ Steel
            Peaks, Vaughn ON - 14/07/2023 </p>
          <!-- https://beyondbouldering.com.au/wp-content/uploads/2023/06/BOLDER.23-Results.xlsx -->
          <a :class="{ hide: !showAll }" class="link" target="_blank"
            href="https://beyondbouldering.com.au/bolder-23-results/">8th Bolder @ Beyond
            Bouldering, Adelaide - 03/06/2023 </a>
          <a class="link" target="_blank"
            href="https://docs.google.com/spreadsheets/d/1Zq0EURDQfX11X3dtPK0Yv5qpitzqX42XpV8jegds9Ts/edit?fbclid=IwAR1ZXh4SpeZL3qRuaZdqYcIthGv5-R3KRJBT2MgC75ZbIRpT4pPtVd2LXSM#gid=983302827">5th
            Island Crown @ Beta Park, Launceston - 22/04/2023 </a>
          <h4 :class="{ hide: !showAll }">2022</h4>
          <a class="link" :class="{ hide: !showAll }" target="_blank"
            href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202022/22%20-%20Open%20-%20Lead.pdf">18th
            Australian Lead Nationals @ Sydney Indoor Climbing Gym Villawood, Sydney - 20/11/2022 </a>
          <a class="link" target="_blank"
            href="https://docs.google.com/spreadsheets/d/1OGnbFMMwJOlKH1UvnUNvrrL-Al9jRyybIl4j4kL6AOc/htmlview#">9th
            Australian Boulder Nationals @ Sydney Indoor Climbing Gym St. Peters, Sydney - 18/11/2022 </a>
          <a class="link" target="_blank"
            href="https://docs.google.com/spreadsheets/d/1ETzKLzNZ2AJxjtfgd2Gp0g7P11cBBgwStdsDNUrXbqY/edit?usp=sharing&fbclid=IwAR2K0EDGeanTu8f3Iv9ob6dutGLqVesFRkrh48NTbUg6QSIntdlBPHWM00A">5th
            VIC Boulder State Titles @ Boulder Lab, Ferntree Gully - 15/10/2022 </a>
          <a class="link" target="_blank"
            href="https://sportclimbingsa.com/wp-content/uploads/2022/09/22-SA-Boulder-ONLINE.pdf">4th SA Boulder State
            Titles @ Beyond Bouldering, Adelaide - 17/09/2022 </a>
          <a class="link" target="_blank"
            href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202022/22%20-%20TAS%20-%20Boulder.pdf">3rd
            TAS Boulder State Titles @ Beta Park, Launceston - 20/08/2022 </a>
          <a class="link" target="_blank"
            href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/StateLeadResultsSCSA2022.pdf">1st
            SA Lead State Titles @ VRC, Adelaide - 14/05/2022 </a>
          <a class="link" :class="{ hide: !showAll }" target="_blank"
            href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/2022%20Open%20Boulder%20selection%20results.pdf">9th
            Boulder National Selection Event @ Nomad, Sydney - 26/02/2022</a>
          <a class="link" :class="{ hide: !showAll }" target="_blank"
            href="https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/21%20-%20NSW_ACT%20-%20Boulder%20-%20Results.pdf">5th
            NSW/ACT Boulder State Titles @ Skywood, Sydney - 22/01/2022</a>
          <h4 :class="{ hide: !showAll }">2021</h4>
          <a class="link" :class="{ hide: !showAll }" target="_blank"
            href="https://sportclimbingsa.com/wp-content/uploads/2022/01/2021-SA-State-Boulder-Titles-Results.pdf">7th
            SA
            Boulder State Titles @ Beyond Bouldering, Adelaide - 23/10/2021</a>
          <a class="link nolink" :class="{ hide: !showAll }" target="_blank" href="">2nd VRC Olympics @ VRC, Adelaide -
            19/09/2021</a>
        </div>
        <div>
          <h3 style="margin-top: 2.5rem">International 🌎</h3>
          <a class="link" target="_blank"
            href="https://www.ifsc-climbing.org/index.php/world-competition/calendar/?task=resultathletes&event=898&result=7">58th
            IFSC Worldcup @ Toronto, CA - 31/05/2015</a>
          <a class="link" target="_blank"
            href="https://www.ifsc-climbing.org/index.php/world-competition/calendar/?task=resultathletes&event=910&result=27">44th
            IFSC Youth World Championships @ Arco, Italy - 06/09/2015</a>
        </div>
        <div>
          <h3 style="margin-top: 2.5rem">Canada 🇨🇦</h3>
          <a class="link" :class="{ hide: showAll }" target="_blank"
            href="https://squamishclimbingmagazine.ca/final-results-2015-youth-bouldering-nationals/">2nd Youth Boulder
            Nationals @ Climbers Rock, Burlington - 13/02/2015</a>
          <CanadaComps :class="{ hide: !showAll }" />
        </div>

      </div>
      <div class="img">
        <img src="/images/climbingBeyond.jpeg" class="pic" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { mobile, desktop } from '../utils/Breakpoints';
import CanadaComps from '../components/CanadaComps.vue';

const showAll = ref(false);

</script>


<style scoped lang="scss">
@import '../scss/mixins.scss';

.results {
  color: var(--darkPurple);
  margin-top: 2rem;
}

.aus-resutls {
  line-clamp: 4;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
}

h4 {
  margin-top: 1rem;
}

a,
p {
  font-weight: 500;
  font-size: 1rem;
  display: block;
}

span {
  font-size: 0.8rem;
  font-weight: 500;
}

.link {
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

.nolink:hover {
  text-decoration: none;
  cursor: inherit;
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
