@echo off
echo Copying generated project images from cache to src/assets...
copy "C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\car_price_pred_1783142655990.png" "src\assets\car_price.png"
copy "C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\house_price_pred_1783142668085.png" "src\assets\house_price.png"
copy "C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\expense_sharing_img_1783142680878.png" "src\assets\expense_manager.png"
copy "C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\iris_classification_img_1783142695284.png" "src\assets\iris_flower.png"

echo.
echo Installing dependencies...
call npm install

echo.
echo Starting the development server...
call npm run dev
