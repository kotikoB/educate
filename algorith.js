for (y = 3; y <= map.getHeight() - 10; y++) {
  map.placeObject(5, y, "block");
  map.placeObject(map.getWidth() - 5, y, "block");
}

// The change is in line 7, changes - 5 to -10 to get the gaps
for (x = 5; x <= map.getWidth() - 10; x++) {
  map.placeObject(x, 3, "block");
  map.placeObject(x, map.getHeight() - 10, "block");
}
