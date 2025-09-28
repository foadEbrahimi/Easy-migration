export default function Form() {
  return (
    <div className='shadow-lg flex-1 px-4 py-7 border border-black/5'>
      <span className='text-body-4 font-medium'>
        اگر سوالی داشتید خوشحال می شویم که به شما کمک و راهنمایی کنیم.
      </span>
      <form className='mt-7 flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex flex-1 flex-col gap-2'>
            <label htmlFor='phoneNumber' className='text-body-3 font-medium'>
              شماره تماس
            </label>
            <input
              id='phoneNumber'
              placeholder='شماره تماس'
              className='border font-sans outline-none focus:ring-primary focus:ring-2 border-[#DCDCDC] rounded-lg w-full placeholder:text-body-5 placeholder:text-[#959090] p-4 placeholder:font-medium'
              type='number'
              inputMode='numeric'
            />
          </div>
          <div className='flex flex-col flex-1 gap-2'>
            <label htmlFor='fullName' className='text-body-3 font-medium'>
              نام و نام خانوادگی
            </label>
            <input
              id='fullName'
              placeholder='نام و نام خانوادگی'
              className='border outline-none focus:ring-primary focus:ring-2 border-[#DCDCDC] rounded-lg w-full placeholder:text-body-5 placeholder:text-[#959090] p-4 placeholder:font-medium'
              type='text'
            />
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-2'>
          <label htmlFor='phoneNumber' className='text-body-3 font-medium'>
            نظرات / توضیحات
          </label>
          <textarea
            id='phoneNumber'
            placeholder='توضیحات'
            className='border outline-none focus:ring-primary focus:ring-2 border-[#DCDCDC] rounded-lg w-full placeholder:text-body-5 placeholder:text-[#959090] p-4 placeholder:font-medium'
          />
        </div>
        <button className='w-full text-white hover:bg-secondary transition-all duration-300 cursor-pointer bg-primary rounded-lg text-button-btn font-medium p-3'>
          ارسال پیام
        </button>
      </form>
    </div>
  );
}
