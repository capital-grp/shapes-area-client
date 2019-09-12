Feature: To test the functionality of an Api for a Circle

@AreaOfCircle
 Scenario Outline:Check for the Area of a Circle
  Given <radius> by the user
  Then area of Circle is equal to <expectedArea>
  Examples:
        | radius  |  expectedArea      |
        | 12.0    |  452.38934         |
        | 300.0   |  282743.3388230814 |
        | 212.0   |  141195.74022293   |
        | 12.07   |  457.68261157      |
        | 122.0   |  46759.46505       |
        | 103.0   |  33329.156         |
