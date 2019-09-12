Feature: To test the functionality of an Api for a Triangle

@AreaOfTriangle
 Scenario Outline:Check for the Area of a Triangle
  Given <SideA> <SideB> <SideC> by the user
  Then area of triangle is equal to <expectedArea>
  Examples:
        | SideA  | SideB   | SideC   | expectedArea  |
        | 12.0   | 13.0    | 14.0    | 72.30         |
        | 300.0  | 400.0   | 600.003 | 53326.358389  |
        | 212.0  | 131.0   | 450.0   | 0.0           |
        | 12.07  | 130.05  | 140.0   | 460.8149      |
        | 122.0  | 133.0   | 134.0   | 7243.4263     |
        | 103.0  | 140.0   | 149.0   | 6926.4778     |



@validityOfSides
  Scenario Outline:Check for the valid sides of Triangle
  Given <SideA> <SideB> <SideC> by the user
  Then validate the triangle has "<type>" sides
  Examples:
        | SideA | SideB   | SideC  | type     |
        | 12.0  | 13.0    | 14.0   | Valid    |
        | 1.0   | 13.0    | 14.0   | InValid  |
        | 12.0  | 1.0     | 14.0   | InValid  |
        | 12.0  | 13.0    | 1.0    | InValid  |
        | 12.0  | 13.0    | 14.0   | Valid    |
        | 0.0   | 13.0    | 14.0   | InValid  |
        | 12.0  | 0.0     | 14.0   | InValid  |
        | 12.0  | 13.0    |100000.0| InValid  |
        | 1.0   | 2.0    | 3.0    | InValid  |