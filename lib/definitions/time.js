var metric
  , seasonal

metric = {
  ms: {
    name: {
      singular: 'Millisecond'
    , plural: 'Milliseconds'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Second'
    , plural: 'Seconds'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minute'
    , plural: 'Minutes'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Hour'
    , plural: 'Hours'
    }
  , to_anchor: 60 * 60
  }
, d: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 60 * 60 * 24
  }
, w: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, M: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 60 * 60 * 24 * 365.25 / 12
  }
, y: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 60 * 60 * 24 * 365.25
  }
};

seasonal = {
  week: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 1 / 52
  }
, month: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 1 / 12
  }
, year: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, seasonal: seasonal
, _anchors: {
    metric: {
      unit: 's'
    , ratio: 1 / (60 * 60 * 24 * 7 * 52)
    }
  , seasonal: {
      unit: 'year'
    , ratio: 60 * 60 * 24 * 7 * 52
    }
  }
};
