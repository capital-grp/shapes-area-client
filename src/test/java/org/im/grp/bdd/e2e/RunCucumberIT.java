package org.im.grp.bdd.e2e;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(//tags ={"@ExceptionScenarios"},
        plugin = {"pretty" ,"html:report" ,
                "json:report/cucumber.json" ,
                "junit:report/cucumber.xml",
                "html:report/cucumber-html-report",
                "rerun:report/rerun.txt"
        },
        features = "src\\test\\resources\\org.im.grp\\features\\",
        glue = {"org.im.grp.bdd.steps"})
public class RunCucumberIT {
}
