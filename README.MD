# Frontend Assignment

แบบทดสอบสำหรับ ผู้สมัครตำแหน่ง Software Engineer, Frontend การทำแบบทดสอบผู้สมัครจะต้องคำนึงถึง กฎสามข้อที่กล่าวไว้ด้านล่างเสมอ เพราะเราเชื่อว่าการพัฒนา Software ที่ดีนั้นไม่เพียงแค่ทำให้ Software ทำงานได้ตาม requirement อย่างเดียว แต่จะต้องคำนึงถึง user และการ maintainance ต่อไปในอนาคตด้วย

#### Detail of React Web

- เมื่อกดชื่อทริป จะต้อง link ไปยัง url ที่ได้จาก trip data
- เมื่อกดอ่านต่อ จะต้อง link ไปยัง url ที่ได้จาก trip data
- จะต้องมีการแสดงผลรูปที่ได้รับมา เพื่อดึงดูดให้ user กดเข้าไปที่ตัวทริป
- หมวดหมู่ที่แสดง สามารถกดและกลายเป็น search keyword โดยเป็นชื่อ tag นั้น
- User สามารถ copy link และส่งต่อไปให้เพื่อน สำหรับ keyword เดียวกัน (Optional)

#### Detail of each route in api-gateway

* Using in the present
    ```express
        @app.get('/') # Make sure server is running
        @app.get('/trips') # Query all trips
        @app.get('/api/trips') # Search keyword in trips    

# How to run assignment-linemanXwongnai 
* Use Docker compose
  ```
  docker-compose build

  docker-compose up
  ```

#### Starting the development Web... in http://localhost/
#### Starting the development api-gateway... in http://localhost:3333/
