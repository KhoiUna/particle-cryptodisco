// This #include statement was automatically added by the Particle IDE.
#include <neopixel.h>

// This #include statement was automatically added by the Particle IDE.
#include <neopixel.h>

void colorWipe(uint32_t c, uint8_t wait);
int lightRing(String input);

SYSTEM_MODE(AUTOMATIC);

// IMPORTANT: Set pixel COUNT, PIN and TYPE
#define PIXEL_COUNT 16
#define PIXEL_PIN D4
#define PIXEL_TYPE WS2813

Adafruit_NeoPixel strip(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);


void setup() {
  Particle.function("lightRing", lightRing);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
}

void loop() {
   //
}

void colorWipe(uint32_t c, uint8_t wait, int position) {
    strip.setPixelColor(position, c);
    strip.show();
    delay(wait);
}

int lightRing(String nameInput) {
    if(nameInput == "ethereum on") {
        colorWipe(strip.Color(18,152,255) , 50, 0);
        return 1;
    } 
    else if(nameInput == "bitcoin on") {
        colorWipe(strip.Color(255, 255, 0) , 50, 8);
        return 1;
    }
    else if(nameInput == "ethereum off") {
        colorWipe(strip.Color(0, 0, 0) , 50, 0);
        return -1;
    }
    else if(nameInput == "bitcoin off") {
        colorWipe(strip.Color(0, 0, 0) , 50, 8);
        return -1;
    }
}

