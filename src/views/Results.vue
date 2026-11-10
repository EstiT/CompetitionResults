<template>
  <div class="results">
    <h2>Competition {{ showAll ? "Results" : "Highlights" }} 🏆<span class="link" @click="showAll = !showAll">{{ showAll
      ?
      '(Hide)' : '(See all)' }}</span></h2>
    <div class="container">
      <div>
        <div class="aus-results">
          <h3>Australia 🇦🇺 </h3>

          <template v-for="yearResults in ausComps" :key="yearResults.year">
            <h4 v-if="showAll">{{ yearResults.year }}</h4>

            <template v-for="result in yearResults.results" :key="`${yearResults.year}-${result.name}`">
              <a
                class="link"
                :class="[{ hide: !showAll && !result.showOnCollapse, nolink: !result.href }]"
                :target="result.href ? '_blank' : undefined"
                :href="result.href || undefined"
              >
                {{ result.name }} @ {{ result.location }} - {{ result.date }}
              </a>
            </template>
          </template>
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
          <h3 style="margin-top: 2.5rem">{{ !showAll ? 'Canada 🇨🇦' : 'North America 🇨🇦🇺🇸' }}</h3>
          <a class="link" :class="{ hide: showAll }" target="_blank"
            href="https://squamishclimbingmagazine.ca/final-results-2015-youth-bouldering-nationals/">2nd Youth Boulder
            Nationals @ Climbers Rock, Burlington - 13/02/2015</a>
          <CanadaComps :class="{ hide: !showAll }" />
        </div>
        <br />
        <br />
        <h5>
          Competition Count: {{ ausComps.reduce((total, year) => total + year.results.length, 0) + 69 }}
        </h5>
      </div>
      <div class="img">
        <img src="/images/climbingBeyond.jpeg" class="pic" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CanadaComps from '../components/CanadaComps.vue';

const showAll = ref(false);

const ausComps = [
  {
    year: '2026',
    showHeading: false,
    results: [
      {
        name: '1st Boulder Ladder',
        location: 'Beyond Bouldering, Thebarton',
        date: '9/11/2026',
        href: 'https://griptonite.io/events/430dc71f-ebb6-556b-b162-edbe73930c90/',
        showOnCollapse: true
      }
    ]
  },
  {
    year: '2025',
    showHeading: false,
    results: [
      {
        name: '2nd Halloween Social Comp',
        location: 'Urban Climb, Adelaide',
        date: '31/10/2025',
        href: null,
        showOnCollapse: false
      }
    ]
  },
  {
    year: '2024',
    showHeading: true,
    results: [
      {
        name: '8th Oceania Lead Championships',
        location: 'Elevate Climbing, Sydney',
        date: '6/12/2024',
        href: 'https://docs.google.com/spreadsheets/d/19MNsKoP-io0o9mzyO2_Aw6YotQJLJM__TDbpeVLIllI/edit?gid=2130885351#gid=2130885351',
        showOnCollapse: true
      },
      {
        name: '17th Oceania Boulder Championships',
        location: 'Port Side Boulders, Perth',
        date: '16/11/2024',
        href: 'https://docs.google.com/spreadsheets/d/1dB5wrw2ZysFq_KWixUMfmu6U3NH4ohOF8XKjbWFCgQc/edit?gid=1341091134#gid=1341091134',
        showOnCollapse: false
      },
      {
        name: '4th 20th Birthday Social Comp',
        location: 'Urban Climb, Adelaide',
        date: '25/10/2024',
        href: null,
        showOnCollapse: false
      },
      {
        name: '3rd SA State Titles',
        location: 'Beyond Bouldering, Keswick',
        date: '15/09/2024',
        href: 'https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202024/24-%20SA%20-%20Boulder.pdf',
        showOnCollapse: true
      },
      {
        name: '12th NSW State Titles',
        location: 'Skywood Climbing, Sydney',
        date: '7/09/2024',
        href: 'https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202024/2024%20NSW%20-%20Boulder.pdf',
        showOnCollapse: false
      },
      {
        name: '4th Olympic Style Competition',
        location: 'Beyond Bouldering, Adelaide',
        date: '16/08/2024',
        href: 'https://www.instagram.com/p/C-1fV2hCpBj/',
        showOnCollapse: false
      }
    ]
  },
  {
    year: '2023',
    showHeading: false,
    results: [
      {
        name: '9th National Lead Selection Event',
        location: 'Cliffhanger Climbing Gym, Melbourne',
        date: '06/10/2023',
        href: 'https://docs.google.com/spreadsheets/d/1Zq0EURDQfX11X3dtPK0Yv5qpitzqX42XpV8jegds9Ts/edit?fbclid=IwAR1ZXh4SpeZL3qRuaZdqYcIthGv5-R3KRJBT2MgC75ZbIRpT4pPtVd2LXSM#gid=983302827',
        showOnCollapse: true
      },
      {
        name: '8th Bolder',
        location: 'Beyond Bouldering, Adelaide',
        date: '03/06/2023',
        href: 'https://beyondbouldering.com.au/bolder-23-results/',
        showOnCollapse: false
      },
      {
        name: '5th Island Crown',
        location: 'Beta Park, Launceston',
        date: '22/04/2023',
        href: 'https://docs.google.com/spreadsheets/d/1Zq0EURDQfX11X3dtPK0Yv5qpitzqX42XpV8jegds9Ts/edit?fbclid=IwAR1ZXh4SpeZL3qRuaZdqYcIthGv5-R3KRJBT2MgC75ZbIRpT4pPtVd2LXSM#gid=983302827',
        showOnCollapse: false
      }
    ]
  },
  {
    year: '2022',
    showHeading: false,
    results: [
      {
        name: '18th Australian Lead Nationals',
        location: 'Sydney Indoor Climbing Gym Villawood, Sydney',
        date: '20/11/2022',
        href: 'https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202022/22%20-%20Open%20-%20Lead.pdf',
        showOnCollapse: false
      },
      {
        name: '9th Australian Boulder Nationals',
        location: 'Sydney Indoor Climbing Gym St. Peters, Sydney',
        date: '18/11/2022',
        href: 'https://docs.google.com/spreadsheets/d/1ETzKLzNZ2AJxjtfgd2Gp0g7P11cBBgwStdsDNUrXbqY/edit?usp=sharing&fbclid=IwAR2K0EDGeanTu8f3Iv9ob6dutGLqVesFRkrh48NTbUg6QSIntdlBPHWM00A',
        showOnCollapse: true
      },
      {
        name: '5th VIC Boulder State Titles',
        location: 'Boulder Lab, Ferntree Gully',
        date: '15/10/2022',
        href: 'https://docs.google.com/spreadsheets/d/1ETzKLzNZ2AJxjtfgd2Gp0g7P11cBBgwStdsDNUrXbqY/edit?usp=sharing&fbclid=IwAR2K0EDGeanTu8f3Iv9ob6dutGLqVesFRkrh48NTbUg6QSIntdlBPHWM00A',
        showOnCollapse: false
      },
      {
        name: '4th SA Boulder State Titles',
        location: 'Beyond Bouldering, Adelaide',
        date: '17/09/2022',
        href: 'https://sportclimbingsa.com/wp-content/uploads/2022/09/22-SA-Boulder-ONLINE.pdf',
        showOnCollapse: true
      },
      {
        name: '3rd TAS Boulder State Titles',
        location: 'Beta Park, Launceston',
        date: '20/08/2022',
        href: 'https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202022/22%20-%20TAS%20-%20Boulder.pdf',
        showOnCollapse: true
      },
      {
        name: '1st SA Lead State Titles',
        location: 'VRC, Adelaide',
        date: '14/05/2022',
        href: 'https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/StateLeadResultsSCSA2022.pdf',
        showOnCollapse: true
      },
      {
        name: '9th Boulder National Selection Event',
        location: 'Nomad, Sydney',
        date: '26/02/2022',
        href: 'https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/2022%20Open%20Boulder%20selection%20results.pdf',
        showOnCollapse: false
      },
      {
        name: '5th NSW/ACT Boulder State Titles',
        location: 'Skywood, Sydney',
        date: '22/01/2022',
        href: 'https://www.sportclimbingaustralia.org.au/resources/Documents/Results%202021/21%20-%20NSW_ACT%20-%20Boulder%20-%20Results.pdf',
        showOnCollapse: false
      }
    ]
  },
  {
    year: '2021',
    showHeading: false,
    results: [
      {
        name: '7th SA Boulder State Titles',
        location: 'Beyond Bouldering, Adelaide',
        date: '23/10/2021',
        href: 'https://sportclimbingsa.com/wp-content/uploads/2022/01/2021-SA-State-Boulder-Titles-Results.pdf',
        showOnCollapse: false
      },
      {
        name: '2nd VRC Olympics',
        location: 'VRC, Adelaide',
        date: '19/09/2021',
        href: null,
        showOnCollapse: false
      }
    ]
  },
  {
    year: '2018',
    showHeading: false,
    results: [
      {
        name: '3rd',
        location: 'Beyond Bouldering, Adelaide',
        date: '27/05/2018',
        href: null,
        showOnCollapse: false
      },
      {
        name: '1st',
        location: 'ABC, Adelaide',
        date: '??/2018',
        href: null,
        showOnCollapse: false
      },
      {
        name: '3rd',
        location: 'Beyond Bouldering, Adelaide',
        date: '27/05/2018',
        href: null,
        showOnCollapse: false
      },
      {
        name: '2nd Lead State Titles',
        location: 'VRC, Adelaide',
        date: '03/03/2018',
        href: null,
        showOnCollapse: false
      }
    ]
  }
];

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
