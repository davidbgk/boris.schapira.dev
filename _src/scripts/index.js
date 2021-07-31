import easyToggle from 'easy-toggle-state';
import 'touchtap-event';
import { ready } from './subscripts/utils';

import './subscripts/localstorageSaveLang';
import './subscripts/localstorageSaveDarkMode';
import './subscripts/footnotesAlternatives';

ready(function () {
  easyToggle();

  var tooltipTimeout;

  function getTooltipElement() {
    var tooltip = document.querySelector('#abbr-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'abbr-tooltip';
      // Technically this is duplicate content, just exposing it on mobile
      tooltip.setAttribute('aria-hidden', 'true');
      document.body.appendChild(tooltip);
    }
    return tooltip;
  }

  function updateTooltip(tooltip, term, expandedTerm) {
    var text = term + ': ' + expandedTerm;
    tooltip.innerHTML = text;
    tooltip.classList.add('visible');

    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }

    var timeoutLength = text.length * 120;
    tooltipTimeout = setTimeout(function () {
      tooltip.classList.remove('visible');
    }, timeoutLength);
  }
});

import './subscripts/webshare';
import './subscripts/nakedDay';
import './subscripts/lazyNetworkLoad';
