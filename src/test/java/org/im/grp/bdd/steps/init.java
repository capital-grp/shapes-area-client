package org.im.grp.bdd.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.im.grp.CalculateAreaService;
import org.im.grp.factory.ShapeFactory;
import org.im.grp.shapes.Shape;

import static org.junit.Assert.assertEquals;

public class init {
    private ShapeFactory shapeFactory;
    private CalculateAreaService area;
    private String isValid = "Valid";
    private double isArea = 0.0;

    @Given("{double} {double} {double} by the user")
    public void sidesOfaTriangle(double sideA, double sideB, double sideC) {
        double[] sides = {sideA, sideB, sideC};
        shapeFactory = new ShapeFactory();
        area = shapeFactory.getAreaOf(Shape.Triangle, sides);
        try {
            isArea=area.getArea();
            isValid = "Valid";
        } catch (Exception e) {
            isValid = "InValid";
        }
    }

    @Then("validate the triangle has {string} sides")
    public void isValidTriangle(String valid) {
        assertEquals("For the given sides the area is " + isValid, valid, isValid);
    }

    @Then("area of triangle is equal to {double}")
    public void area_of_triangle_is_equal_to(double expectedAreaOfTriangle) {
        // Write code here that turns the phrase above into concrete actions
        assertEquals("For the given sides the area is " + isValid, expectedAreaOfTriangle, isArea,0.02);
    }

    @Given("{double} by the user")
    public void by_the_user(Double double1) {
        double[] sides = {double1};
        shapeFactory = new ShapeFactory();
        area = shapeFactory.getAreaOf(Shape.Circle, sides);
        try {
            isArea=area.getArea();
            isValid = "Valid";
        } catch (Exception e) {
            isValid = "InValid";
        }
    }

    @Then("area of Circle is equal to {double}")
    public void area_of_Circle_is_equal_to(Double expectedAreaOfCircle) {
        assertEquals("For the given sides the area is " + isValid, expectedAreaOfCircle, isArea,0.02);
    }
}
