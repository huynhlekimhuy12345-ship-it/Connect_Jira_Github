# Điều khoản sử dụng: Chi phí API GitHub / Jira

> Áp dụng cho dịch vụ tích hợp GitHub + Jira của Nexus (External Integration Service).
> Ngày soạn: 2026-11-21. Trạng thái: dự thảo — chờ team chốt.

## 1. Tài khoản kết nối là của khách hàng

Khách hàng kết nối GitHub / Jira bằng tài khoản của chính họ. Mọi chi phí
thuộc về gói GitHub / Jira của khách hàng (kể cả nâng gói để tăng hạn mức
gọi API) do khách hàng chịu. Nexus không chịu khoản phí này.

## 2. Nexus tối ưu số lần gọi API

Nexus cam kết giảm số lần gọi API xuống mức tối thiểu:

- Ưu tiên dùng dữ liệu sẵn trong webhook (không gọi API thêm khi payload
  đã có đủ thông tin).
- Cache dữ liệu issue / repo trong thời gian ngắn; gộp các event trùng nhau.
- Hàng đợi + thử lại khi gặp lỗi 429 (quá hạn mức), không làm mất event.
- Mỗi người dùng gọi API bằng token của chính mình (không dồn hết vào
  một token chung).

Nhờ đó, trong điều kiện sử dụng bình thường, khách hàng không chạm trần
hạn mức API.

## 3. Khi khách hàng vượt hạn mức

Nếu khách hàng vượt hạn mức API do khối lượng sử dụng vượt xa mức thiết
kế (số lượng event / thao tác lớn bất thường), việc nâng gói GitHub / Jira
do khách hàng tự quyết định và chi trả. Nexus hỗ trợ tối ưu thêm (tài
khoản bot riêng, tách luồng gọi API) khi khách hàng yêu cầu.
