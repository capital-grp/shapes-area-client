$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/org.im.grp/features/serviceCircleIT.feature");
formatter.feature({
  "name": "To test the functionality of an Api for a Circle",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check for the Area of a Circle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfCircle"
    }
  ]
});
formatter.step({
  "name": "\u003cradius\u003e by the user",
  "keyword": "Given "
});
formatter.step({
  "name": "area of Circle is equal to \u003cexpectedArea\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "radius",
        "expectedArea"
      ]
    },
    {
      "cells": [
        "12.0",
        "452.38934"
      ]
    },
    {
      "cells": [
        "300.0",
        "282743.3388230814"
      ]
    },
    {
      "cells": [
        "212.0",
        "141195.74022293"
      ]
    },
    {
      "cells": [
        "12.07",
        "457.68261157"
      ]
    },
    {
      "cells": [
        "122.0",
        "46759.46505"
      ]
    },
    {
      "cells": [
        "103.0",
        "33329.156"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check for the Area of a Circle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfCircle"
    }
  ]
});
formatter.step({
  "name": "12.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.by_the_user(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of Circle is equal to 452.38934",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_Circle_is_equal_to(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Circle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfCircle"
    }
  ]
});
formatter.step({
  "name": "300.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.by_the_user(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of Circle is equal to 282743.3388230814",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_Circle_is_equal_to(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Circle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfCircle"
    }
  ]
});
formatter.step({
  "name": "212.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.by_the_user(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of Circle is equal to 141195.74022293",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_Circle_is_equal_to(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Circle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfCircle"
    }
  ]
});
formatter.step({
  "name": "12.07 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.by_the_user(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of Circle is equal to 457.68261157",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_Circle_is_equal_to(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Circle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfCircle"
    }
  ]
});
formatter.step({
  "name": "122.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.by_the_user(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of Circle is equal to 46759.46505",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_Circle_is_equal_to(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Circle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfCircle"
    }
  ]
});
formatter.step({
  "name": "103.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.by_the_user(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of Circle is equal to 33329.156",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_Circle_is_equal_to(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/org.im.grp/features/serviceTriangleIT.feature");
formatter.feature({
  "name": "To test the functionality of an Api for a Triangle",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check for the Area of a Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfTriangle"
    }
  ]
});
formatter.step({
  "name": "\u003cSideA\u003e \u003cSideB\u003e \u003cSideC\u003e by the user",
  "keyword": "Given "
});
formatter.step({
  "name": "area of triangle is equal to \u003cexpectedArea\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SideA",
        "SideB",
        "SideC",
        "expectedArea"
      ]
    },
    {
      "cells": [
        "12.0",
        "13.0",
        "14.0",
        "72.30"
      ]
    },
    {
      "cells": [
        "300.0",
        "400.0",
        "600.003",
        "53326.358389"
      ]
    },
    {
      "cells": [
        "212.0",
        "131.0",
        "450.0",
        "0.0"
      ]
    },
    {
      "cells": [
        "12.07",
        "130.05",
        "140.0",
        "460.8149"
      ]
    },
    {
      "cells": [
        "122.0",
        "133.0",
        "134.0",
        "7243.4263"
      ]
    },
    {
      "cells": [
        "103.0",
        "140.0",
        "149.0",
        "6926.4778"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check for the Area of a Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfTriangle"
    }
  ]
});
formatter.step({
  "name": "12.0 13.0 14.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of triangle is equal to 72.30",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_triangle_is_equal_to(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfTriangle"
    }
  ]
});
formatter.step({
  "name": "300.0 400.0 600.003 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of triangle is equal to 53326.358389",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_triangle_is_equal_to(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfTriangle"
    }
  ]
});
formatter.step({
  "name": "212.0 131.0 450.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of triangle is equal to 0.0",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_triangle_is_equal_to(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfTriangle"
    }
  ]
});
formatter.step({
  "name": "12.07 130.05 140.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of triangle is equal to 460.8149",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_triangle_is_equal_to(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfTriangle"
    }
  ]
});
formatter.step({
  "name": "122.0 133.0 134.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of triangle is equal to 7243.4263",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_triangle_is_equal_to(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the Area of a Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AreaOfTriangle"
    }
  ]
});
formatter.step({
  "name": "103.0 140.0 149.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "area of triangle is equal to 6926.4778",
  "keyword": "Then "
});
formatter.match({
  "location": "init.area_of_triangle_is_equal_to(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "\u003cSideA\u003e \u003cSideB\u003e \u003cSideC\u003e by the user",
  "keyword": "Given "
});
formatter.step({
  "name": "validate the triangle has \"\u003ctype\u003e\" sides",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SideA",
        "SideB",
        "SideC",
        "type"
      ]
    },
    {
      "cells": [
        "12.0",
        "13.0",
        "14.0",
        "Valid"
      ]
    },
    {
      "cells": [
        "1.0",
        "13.0",
        "14.0",
        "InValid"
      ]
    },
    {
      "cells": [
        "12.0",
        "1.0",
        "14.0",
        "InValid"
      ]
    },
    {
      "cells": [
        "12.0",
        "13.0",
        "1.0",
        "InValid"
      ]
    },
    {
      "cells": [
        "12.0",
        "13.0",
        "14.0",
        "Valid"
      ]
    },
    {
      "cells": [
        "0.0",
        "13.0",
        "14.0",
        "InValid"
      ]
    },
    {
      "cells": [
        "12.0",
        "0.0",
        "14.0",
        "InValid"
      ]
    },
    {
      "cells": [
        "12.0",
        "13.0",
        "100000.0",
        "InValid"
      ]
    },
    {
      "cells": [
        "1.0",
        "2.0",
        "3.0",
        "InValid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "12.0 13.0 14.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"Valid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "1.0 13.0 14.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"InValid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "12.0 1.0 14.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"InValid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "12.0 13.0 1.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"InValid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "12.0 13.0 14.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"Valid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "0.0 13.0 14.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"InValid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "12.0 0.0 14.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"InValid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "12.0 13.0 100000.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"InValid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for the valid sides of Triangle",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validityOfSides"
    }
  ]
});
formatter.step({
  "name": "1.0 2.0 3.0 by the user",
  "keyword": "Given "
});
formatter.match({
  "location": "init.sidesOfaTriangle(double,double,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the triangle has \"InValid\" sides",
  "keyword": "Then "
});
formatter.match({
  "location": "init.isValidTriangle(String)"
});
formatter.result({
  "status": "passed"
});
});