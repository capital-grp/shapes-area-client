package org.im.grp.apiTest;

import org.im.grp.CalculateAreaService;
import org.im.grp.CustomExceptions.ValidationFailException;
import org.im.grp.factory.ShapeFactory;
import org.im.grp.shapes.Shape;
import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;

public class ApiTestForExceptions {

    private ShapeFactory shapeFactory;
    private CalculateAreaService area;

    @Before
    public void test() {
        shapeFactory = new ShapeFactory();
    }

    @Test()
    public void testForInvalidRadiusAsNull() {
        double[] sides = null;
        try{
        area = shapeFactory.getAreaOf(Shape.Circle, sides);}
        catch(NullPointerException e)
        {
            assertEquals(e.getMessage(),"Sides cannot be null , Please enter a valid parameter",e.getMessage());
        }
    }

    @Test
    public void testForAreaOfTriangleWhenNullSidesArePassed() {
        boolean thrown = false;
        try {
            area = shapeFactory.getAreaOf(Shape.Triangle, null);
        } catch (NullPointerException e) {
            thrown = true;
            assertEquals(e.getMessage(), "Sides cannot be null , Please enter a valid parameter");
        }
        assertTrue(thrown);
    }

    @Test
    public void testForExceptionWithAreaOfTriangleWithExtraSides() {

        double[] sides = {8.0, 9, 9.0, 7.9};
        boolean thrown = false;
        try {
            area = shapeFactory.getAreaOf(Shape.Triangle, sides);
        } catch (IllegalArgumentException e) {
            thrown = true;
            assertEquals(e.getMessage(), "Triangle has 3 sides and not :: " + sides.length + " :: sides");
        }
        assertTrue(thrown);
    }
    @Test
    public void testForExceptionWithInvalidSideAMax() {

        double[] sides = {101.0, 11.0, 5.0};
        boolean thrown = false;
        try {
            area = shapeFactory.getAreaOf(Shape.Triangle, sides);
            area.getArea();
        } catch (ValidationFailException e) {
            thrown = true;
            assertEquals(e.getMessage(), "Triangle should have valid sides , checkout sides again for " + area.toString());
        }
        assertTrue(thrown);
    }

    @Test
    public void testForExceptionWithInvalidSideBMax() {

        double[] sides = {101.0, 1100.0, 5.0};
        boolean thrown = false;
        try {
            area = shapeFactory.getAreaOf(Shape.Triangle, sides);
            area.getArea();
        } catch (ValidationFailException e) {
            thrown = true;
            assertEquals(e.getMessage(), "Triangle should have valid sides , checkout sides again for " + area.toString());
        }
        assertTrue(thrown);
    }

    @Test
    public void testForExceptionWithInvalidSideCMax() {

        double[] sides = {101.0, 11.0, 5000.0};
        boolean thrown = false;
        try {
            area = shapeFactory.getAreaOf(Shape.Triangle, sides);
            area.getArea();
        } catch (ValidationFailException e) {
            thrown = true;
            assertEquals(e.getMessage(), "Triangle should have valid sides , checkout sides again for " + area.toString());
        }
        assertTrue(thrown);
    }
    @Test()
    public void testForMessageInvalidRadiusAsNull() {
        Throwable s = new ValidationFailException("my custom message exception");
        assertEquals(s.getMessage(), "my custom message exception");
    }

    @Test
    public void testForAreaOfCircleWhenRadiusIsNull() {
        boolean thrown = false;
        try {
            area = shapeFactory.getAreaOf(Shape.Circle, null);
        } catch (NullPointerException e) {
            thrown = true;
            assertEquals("Sides cannot be null , Please enter a valid parameter", e.getMessage());
        }
        assertTrue(thrown);
    }

    @Test
    public void testForAreaOfCircleWithWrongArgument() {
        double[] sides = {0.8, 9.0};
        boolean thrown = false;
        try {
            area = shapeFactory.getAreaOf(Shape.Circle, sides);
        } catch (IllegalArgumentException e) {
            thrown = true;
            assertEquals("Circle require only Radius , extra arguments should be removed", e.getMessage());
        }
        assertTrue(thrown);
    }

}
