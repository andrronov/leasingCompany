<template>
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-20" />
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h3 class="text-center text-xl bg-dev-500 p-2 text-white">Отзыв нашего клиента!</h3>
      <figure class="mt-10">
        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>Работа с лизинговой компанией оказалась очень приятной и эффективной. Сотрудники - настоящие профессионалы, помогли мне получить необходимое оборудование без лишних сложностей. Очень рекомендую эту компанию!</p>
        </blockquote>
        <figcaption class="mt-10">
          <img class="mx-auto h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div class="mt-4 flex items-center justify-center space-x-3 text-base">
            <div class="font-medium text-gray-700">Ирина</div>
            <!-- <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
              <circle cx="1" cy="1" r="1" />
            </svg> -->
            <!-- <div class="text-gray-600">Руководитель </div> -->
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>