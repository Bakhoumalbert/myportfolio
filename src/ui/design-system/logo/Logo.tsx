import Image from "next/image";

interface Props {
  size?: "very-small" | "small" | "medium" | "large" | "very-large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number = 0;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium": // default
      sizeLogo = 72;
      break;
    case "large":
      sizeLogo = 140;
      break;
    case "very-large":
      sizeLogo = 230;
      break;
    default:
      break;
  }

  return (
    <div>
      <Image className="fill-none" width={sizeLogo} height={sizeLogo} src="/assets/images/profil.jpg" alt="logo_ci_uam" />
      {/* <svg
        width={sizeLogo}
        viewBox="0 0 139 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M69.6837 138.92C107.732 138.92 138.576 107.918 138.576 69.6754C138.576 31.4327 107.732 0.430908 69.6837 0.430908C31.6353 0.430908 0.791016 31.4327 0.791016 69.6754C0.791016 107.918 31.6353 138.92 69.6837 138.92Z"
          fill="#5F62E2"
        />
        <path
          d="M98.1582 124.371L102.35 116.978L103.932 124.689C110.576 117.773 113.819 114.116 116.746 106.404L126.949 111.89L125.446 97.6594L122.994 91.4584L130.113 92.1739C128.057 87.4834 125.921 83.1109 123.232 79.1359C125.921 75.8764 127.74 73.4119 127.503 68.0854C127.345 64.9849 126.316 61.8049 124.418 59.9764C122.124 57.8299 118.09 54.1729 114.847 55.0474C113.977 55.2859 113.107 55.6834 112.237 56.1604L112.554 41.4529L112.316 40.3399C106.859 26.5864 97.13 17.4439 86.0565 12.9919C75.5368 8.77841 63.9096 8.77841 53.3899 12.9919C42.3164 17.4439 32.6667 26.5069 27.13 40.3399L26.8927 41.5324L27.2091 56.2399C26.339 55.7629 25.3899 55.3654 24.5989 55.1269C21.356 54.2524 17.3221 57.9094 15.0283 60.0559C13.13 61.8844 12.1017 64.9849 11.9435 68.1649C11.7063 73.5709 13.5255 75.9559 16.2147 79.2154C13.5255 83.1904 11.3899 87.5629 9.33337 92.2534L16.452 91.5379L14 97.7389L12.4972 111.969L22.7006 106.484C25.5481 114.195 28.8701 117.852 35.5142 124.769L37.0961 117.057L41.2882 124.451C41.2882 124.451 41.3673 142.418 56.0791 152.037L55.3673 148.142C55.3673 148.142 62.2486 159.431 83.9209 155.694L80.9944 152.276C80.9944 152.276 87.0848 151.163 92.3842 147.029L87.9548 146.87C94.2825 140.987 97.3673 132.401 98.1582 124.371Z"
          fill="#081630"
        />
        <path
          d="M106.542 60.692C88.8249 43.202 50.6215 43.202 32.8249 60.692L31.9548 75.7175C40.9718 68.7215 56.3955 62.441 69.8418 62.0435C83.2882 62.3615 98.3955 68.7215 107.412 75.7175L106.542 60.692Z"
          fill="#6E75E5"
        />
        <path
          d="M106.542 60.692C101.876 56.081 95.7062 52.6625 88.904 50.4365C82.4972 56.558 67.5481 64.4285 32.5085 66.416L31.9548 75.638C40.9718 68.642 56.3955 62.3615 69.8418 61.964C83.2882 62.282 98.3955 68.642 107.412 75.638L106.542 60.692Z"
          fill="#5658CB"
        />
        <path
          d="M104.565 57.1145C103.616 56.1605 102.588 55.2065 101.559 54.332L101.718 65.3825C92.4634 59.579 79.9662 55.2065 69.8419 55.127C60.034 54.968 46.7458 59.738 37.6498 65.3825L37.808 54.0935C36.7797 54.968 35.7515 55.8425 34.8023 56.876L34.1696 72.14C42.7119 65.144 57.1865 58.943 69.8419 58.5455C82.4972 58.8635 96.6554 65.144 105.198 71.981L104.565 57.1145Z"
          fill="#081630"
        />
        <path
          d="M32.8249 53.219C52.5198 38.114 86.9266 38.114 106.622 53.219L106.859 42.0095C101.955 30.0845 93.5707 22.214 84.0001 18.398C74.904 14.741 64.6215 14.741 55.5255 18.398C45.8758 22.214 37.4916 30.0845 32.5876 42.0095L32.8249 53.219Z"
          fill="#6E75E5"
        />
        <path
          d="M32.8249 53.2189C52.5199 38.1139 86.9266 38.1139 106.622 53.2189L106.859 42.0094C102.983 32.6284 96.9718 25.7119 89.8532 21.3394C82.8927 29.6869 67.3899 39.7039 32.7458 44.9509L32.8249 53.2189Z"
          fill="#5658CB"
        />
        <path
          d="M86.5312 100.442C85.2656 102.668 83.4464 103.781 80.5199 105.053C84.4747 100.76 82.8136 94.559 82.4973 93.605C80.9153 91.9355 77.9097 90.584 76.486 89.948C73.3221 90.902 71.7402 92.7305 71.7402 92.7305L69.6046 95.1155L67.469 92.7305C67.469 92.7305 65.8871 90.902 62.7232 89.948C61.2995 90.5045 58.2939 91.9355 56.7119 93.605C56.3956 94.559 55.0509 100.76 59.0057 105.053C56.0792 103.781 53.9436 102.668 52.6781 100.442L46.8249 106.325C44.1357 123.974 47.8532 146.234 70.3956 145.598C73.7176 144.167 77.2769 141.861 79.4916 138.125C79.4916 138.125 81.3899 139.317 82.4182 142.1C93.017 135.024 93.8871 117.852 92.147 106.245L86.5312 100.442Z"
          fill="#FEDBB8"
        />
        <path
          d="M81.3108 104.178C84.3164 99.965 82.8927 94.4795 82.5763 93.605C80.9944 91.9355 77.9887 90.584 76.565 89.948C73.4012 90.902 71.8193 92.7305 71.8193 92.7305L70.8701 93.764C78.3842 95.036 83.3673 99.2495 81.3108 104.178ZM68.2599 93.446L67.6272 92.7305C67.6272 92.7305 66.0452 90.902 62.8814 89.948C61.4577 90.5045 58.452 91.9355 56.8701 93.605C56.791 93.764 56.7119 94.1615 56.6328 94.718C60.5876 93.5255 64.6215 93.128 68.2599 93.446Z"
          fill="#E0B497"
        />
        <path
          d="M50.938 102.35L47.0623 106.325C44.373 123.974 48.0905 146.234 70.6329 145.598C73.9549 144.167 77.5142 141.861 79.7289 138.125C79.7289 138.125 81.6272 139.317 82.6555 142.1C84.8702 140.589 86.6894 138.681 88.1131 136.455C48.9606 139.397 49.9097 110.538 50.938 102.35Z"
          fill="#E0B497"
        />
        <path
          d="M51.0961 93.6844C51.0961 93.3664 51.0961 92.9689 51.0961 92.6509C53.3899 88.8349 57.582 85.7344 61.695 84.2239C62.1696 84.1444 62.7232 84.1444 63.2769 84.1444C63.8306 79.6129 62.8814 73.6504 62.3278 73.4119C60.7458 72.6169 53.6272 71.8219 51.4125 71.5039C45.0848 73.8094 39.3108 76.9894 34.8023 80.6464C34.0905 81.2029 33.2995 81.6004 32.5085 81.7594C32.7458 85.6549 33.5368 91.3789 36.7797 92.8894C41.2091 95.0359 48.3278 94.1614 51.0961 93.6844Z"
          fill="#3A4559"
        />
        <path
          d="M52.0452 71.663L51.3334 71.5835C49.5142 72.2195 47.7741 72.935 46.113 73.73L35.5933 92.174C35.9096 92.492 36.3051 92.7305 36.7006 92.8895C37.4916 93.287 38.4407 93.5255 39.3899 93.764L52.0452 71.663Z"
          fill="#6A7486"
        />
        <path
          d="M56.3956 72.2194C55.6837 72.1399 54.8927 71.9809 54.1809 71.9014L41.4464 94.0819C42.2374 94.1614 42.9492 94.2409 43.7402 94.2409L56.3956 72.2194Z"
          fill="#6A7486"
        />
        <path
          d="M60.6667 72.9349C60.0339 72.7759 59.3221 72.6964 58.5311 72.5374L46.113 94.2409C46.9831 94.1614 47.8532 94.1614 48.565 94.0819L60.6667 72.9349Z"
          fill="#6A7486"
        />
        <path
          d="M21.7514 72.2988C21.3559 70.9473 21.3559 70.6293 21.3559 69.2778C20.4859 70.1523 19.6949 71.2653 19.0621 72.5373C18.983 70.1523 19.4576 67.2903 21.1977 65.4618L25.7062 61.9638C24.4407 61.2483 23.096 60.7713 22.6215 61.0098C21.3559 61.8048 19.9322 62.9973 18.8249 64.0308C17.1638 65.6208 17.0847 71.1063 18.5085 72.8553L19.774 74.5248C20.4068 73.7298 21.1186 73.0143 21.7514 72.2988Z"
          fill="#FEDBB8"
        />
        <path
          d="M21.7514 72.2989C21.3559 70.9474 21.3559 70.6294 21.3559 69.2779C20.4859 70.1524 19.6949 71.2654 19.0622 72.5374C18.9831 71.4244 19.1412 70.1524 19.3785 68.9599C18.8249 69.1984 18.1921 69.3574 17.5593 69.5164C17.6384 70.9474 17.9548 72.2989 18.5876 73.0144L19.774 74.5249C20.4068 73.7299 21.1186 73.0144 21.7514 72.2989ZM24.4407 63.0769L25.7853 62.0434C25.3107 61.8049 24.8362 61.5664 24.3616 61.3279C24.4407 61.8844 24.4407 62.4409 24.4407 63.0769Z"
          fill="#E0B497"
        />
        <path
          d="M26.7346 67.9265L26.8137 66.416L24.2826 67.37C24.2035 68.96 24.1244 69.119 24.3617 69.8345C25.1526 69.1985 25.9436 68.5625 26.7346 67.9265Z"
          fill="#E0B497"
        />
        <path
          d="M70.3164 82.7134H69.13C69.13 84.0649 68.9718 85.3369 68.6554 86.4499C69.0509 86.6884 69.4464 86.8474 69.6836 87.0064C69.9209 86.8474 70.3164 86.6089 70.7119 86.4499C70.4746 85.3369 70.3164 84.0649 70.3164 82.7134Z"
          fill="#E0B497"
        />
        <path
          d="M88.2712 93.6844C91.1187 94.1614 98.1583 94.9564 102.746 92.8894C105.91 91.3789 106.78 85.6549 107.017 81.7594C106.226 81.6004 105.435 81.2824 104.723 80.6464C100.215 76.9894 94.4407 73.8094 88.1131 71.5039C85.8984 71.7424 78.7797 72.6169 77.1978 73.4119C76.6441 73.7299 75.695 79.6129 76.2487 84.1444C76.8023 84.0649 77.2769 84.0649 77.8306 84.2239C81.9436 85.7344 86.1357 88.8349 88.4294 92.6509C88.2713 92.9689 88.2712 93.3664 88.2712 93.6844Z"
          fill="#3A4559"
        />
        <path
          d="M94.1243 74.1275C92.9379 73.571 91.6723 73.0145 90.4068 72.458L82.2599 86.609C83.4463 87.404 84.4746 88.2785 85.5028 89.2325L94.1243 74.1275Z"
          fill="#6A7486"
        />
        <path
          d="M97.7628 76.0353C97.2091 75.7173 96.5764 75.3993 95.9436 75.0813L86.9266 90.8223C87.4012 91.3788 87.8758 92.0148 88.1922 92.6508L97.7628 76.0353Z"
          fill="#6A7486"
        />
        <path
          d="M89.8531 93.9228C90.4859 94.0023 91.2769 94.0818 92.0678 94.1613L101.243 78.1818C100.689 77.7843 100.136 77.4663 99.5029 77.0688L89.8531 93.9228Z"
          fill="#6A7486"
        />
        <path
          d="M115.006 69.8344C114.215 69.1984 113.424 68.4829 112.633 67.8469L112.554 66.3364L115.085 67.3699C115.164 68.9599 115.243 69.1189 115.006 69.8344Z"
          fill="#E0B497"
        />
        <path
          d="M119.593 74.5248C118.961 73.7298 118.249 73.0143 117.537 72.2988C117.932 70.9473 118.011 70.6293 117.932 69.2778C118.802 70.1523 119.593 71.2653 120.226 72.5373C120.305 70.1523 119.831 67.2903 118.091 65.4618L113.582 61.9638C114.848 61.2483 116.192 60.7713 116.667 61.0098C117.932 61.8048 119.356 62.9973 120.463 64.0308C122.124 65.6208 122.203 71.1063 120.78 72.8553L119.593 74.5248Z"
          fill="#FEDBB8"
        />
        <path
          d="M119.593 74.525C118.96 73.73 118.249 73.0145 117.537 72.299C117.932 70.9475 118.011 70.6295 117.932 69.278C118.802 70.1525 119.593 71.2655 120.226 72.5375C120.226 71.663 120.226 70.709 120.068 69.755C120.542 70.073 121.017 70.3115 121.571 70.55C121.412 71.5835 121.096 72.458 120.701 72.935L119.593 74.525ZM115.718 63.6335L113.661 62.0435C114.294 61.7255 114.847 61.4075 115.401 61.2485C115.401 61.964 115.48 62.759 115.718 63.6335Z"
          fill="#E0B497"
        />
        <path
          d="M69.6837 67.688C67.9436 67.7675 66.2826 67.9265 64.5425 68.165C66.7572 69.119 68.1018 72.3785 68.6555 76.115H70.5538C71.1865 72.299 72.4521 69.119 74.6668 68.165C73.0849 68.006 71.4238 67.847 69.6837 67.688Z"
          fill="#E0B497"
        />
        <path
          d="M68.7345 101.157L67.6272 96.149C67.469 95.354 66.9944 94.718 66.2825 94.3205L64.5424 93.3665C63.7514 92.969 62.8814 92.8895 62.0904 93.287L61.774 93.446C60.5876 94.0025 60.0339 95.2745 60.2712 96.5465L60.5876 98.1365L60.904 97.8185C61.5368 97.103 62.4068 96.8645 63.356 97.0235L64.5424 97.262C65.1752 97.3415 65.7288 97.6595 66.1243 98.1365L68.7345 101.157ZM70.6328 101.157L71.7401 96.149C71.8983 95.354 72.3729 94.718 73.0848 94.3205L74.8249 93.3665C75.6159 92.969 76.4859 92.8895 77.2769 93.287L77.5933 93.446C78.7797 94.0025 79.3334 95.2745 79.0961 96.5465L78.7797 98.1365L78.4633 97.8185C77.8305 97.103 76.9605 96.8645 76.0113 97.0235L74.8249 97.262C74.1921 97.3415 73.6385 97.6595 73.243 98.1365L70.6328 101.157Z"
          fill="#081630"
        />
        <path
          d="M45.0057 127.79C45.0848 127.79 59.8758 117.455 80.1244 115.785C87.243 118.329 92.3052 123.974 95.3899 129.38L90.486 132.242C87.8758 127.79 84.7119 123.656 79.8871 121.589C61.4577 123.258 47.6159 133.911 47.6159 133.991L45.0057 127.79Z"
          fill="#081630"
        />
        <path
          d="M69.6837 19.511C71.8193 19.511 73.8758 20.0675 75.6159 20.942C77.4351 21.8165 78.938 23.009 80.0453 24.3605C76.5651 23.8835 73.164 23.486 69.6837 23.486C66.2035 23.486 62.8024 23.8835 59.3221 24.3605C60.5086 23.009 62.0114 21.8165 63.7515 20.942C65.5707 20.0675 67.5481 19.5905 69.6837 19.511ZM80.0453 35.093C78.8589 36.206 77.356 37.0805 75.6159 37.796C73.8758 38.432 71.8193 38.8295 69.6837 38.8295C67.5481 38.8295 65.5707 38.432 63.7515 37.796C62.0114 37.16 60.4295 36.206 59.3221 35.093C62.8024 34.934 66.2035 34.8545 69.6837 34.8545C73.164 34.8545 76.5651 34.934 80.0453 35.093Z"
          fill="#081630"
        />
      </svg> */}
    </div>
  );
};
