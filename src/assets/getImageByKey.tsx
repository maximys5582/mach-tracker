import avatar from "./avatar_global.png"
import vs from "./divider.png"
import role from "./illustrations_role.png"

export type ImageKey = keyof typeof images

const images = {
  role: role,
  logo: (
    <svg
      width="258"
      height="23"
      viewBox="0 0 258 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.032 0.599998H30.208L26.24 23H19.84L21.824 11.768L15.52 19.512H11.968L8.384 11.8L6.4 23H0L3.968 0.599998H9.664L14.784 12.248L24.032 0.599998ZM45.1845 5.848C49.2378 5.848 50.9018 7.87467 50.1765 11.928L48.2245 23H42.7845L42.6245 21.272C41.6432 21.9973 40.7685 22.4667 40.0005 22.68C39.2538 22.8933 38.1445 23 36.6725 23H33.3445C32.0218 23 31.0298 22.616 30.3685 21.848C29.7072 21.0587 29.5152 20.0027 29.7925 18.68L30.1125 16.888C30.3685 15.544 30.8592 14.5627 31.5845 13.944C32.3098 13.3253 33.3338 13.016 34.6565 13.016H43.4885L43.6805 11.96C43.7872 11.2987 43.7338 10.84 43.5205 10.584C43.3072 10.328 42.8698 10.2 42.2085 10.2H39.6485C39.1152 10.2 38.7312 10.296 38.4965 10.488C38.2832 10.68 38.1338 11.0427 38.0485 11.576L37.9845 12.024H31.7125L31.9365 10.648C32.2138 8.89867 32.7898 7.66133 33.6645 6.936C34.5605 6.21067 35.8832 5.848 37.6325 5.848H45.1845ZM39.5525 19.064C40.3845 19.064 41.1205 18.84 41.7605 18.392L42.6565 17.752L42.8165 16.856L42.9445 16.152H37.8885C37.4192 16.152 37.0885 16.2373 36.8965 16.408C36.7258 16.5573 36.5978 16.8667 36.5125 17.336L36.4165 17.816C36.3525 18.2853 36.3952 18.616 36.5445 18.808C36.6938 18.9787 37.0138 19.064 37.5045 19.064H39.5525ZM61.6858 10.904L60.6938 16.408C60.6084 16.9413 60.6511 17.3147 60.8218 17.528C61.0138 17.7413 61.3871 17.848 61.9418 17.848H66.2298L65.3018 23H58.2938C54.7738 23 53.3338 21.2507 53.9738 17.752L55.1898 10.904H52.1178L53.0138 5.848H56.0858L58.0378 2.008H63.2538L62.5818 5.848H68.3418L67.4458 10.904H61.6858ZM73.3873 23C69.3126 23 67.6272 20.952 68.3313 16.856L69.2913 11.352C69.6326 9.304 70.2833 7.87467 71.2433 7.064C72.2246 6.25333 73.7393 5.848 75.7873 5.848H82.7313C86.7633 5.848 88.4486 7.896 87.7873 11.992L87.5953 13.24H81.3553L81.4193 12.76C81.5046 12.0987 81.4406 11.64 81.2273 11.384C81.0139 11.128 80.5766 11 79.9153 11H77.5153C76.8539 11 76.3846 11.1173 76.1073 11.352C75.8513 11.5653 75.6699 12.0027 75.5633 12.664L74.9553 16.088C74.8486 16.7493 74.9019 17.208 75.1153 17.464C75.3499 17.72 75.7979 17.848 76.4593 17.848H78.8593C79.5206 17.848 79.9793 17.7413 80.2353 17.528C80.5126 17.2933 80.7046 16.8453 80.8113 16.184L80.9393 15.448H87.1793L86.8273 17.496C86.4646 19.5653 85.8033 21.0053 84.8433 21.816C83.8833 22.6053 82.3793 23 80.3313 23H73.3873ZM104.658 5.848C108.754 5.848 110.428 7.896 109.682 11.992L107.762 23H101.266L103.026 12.92C103.154 12.2587 103.1 11.8 102.866 11.544C102.652 11.288 102.215 11.16 101.554 11.16H100.306C99.2604 11.16 98.4071 11.3947 97.7458 11.864L96.9138 12.472L95.0578 23H88.5617L92.5298 0.599998H99.0258L97.8098 7.48C98.7484 6.776 99.5911 6.328 100.338 6.136C101.084 5.944 102.183 5.848 103.634 5.848H104.658ZM144.442 0.599998L143.354 6.712H136.122L133.242 23H126.33L129.21 6.712H121.978L123.066 0.599998H144.442ZM156.466 5.848H157.842L156.722 11.928H153.49C152.402 11.928 151.549 12.1627 150.93 12.632L150.098 13.24L148.37 23H141.874L144.914 5.848H149.554L149.778 8.12C151.016 7.13867 152.04 6.52 152.85 6.264C153.661 5.98667 154.866 5.848 156.466 5.848ZM171.935 5.848C175.988 5.848 177.652 7.87467 176.927 11.928L174.975 23H169.535L169.375 21.272C168.393 21.9973 167.519 22.4667 166.751 22.68C166.004 22.8933 164.895 23 163.423 23H160.095C158.772 23 157.78 22.616 157.118 21.848C156.457 21.0587 156.265 20.0027 156.543 18.68L156.863 16.888C157.119 15.544 157.609 14.5627 158.335 13.944C159.06 13.3253 160.084 13.016 161.407 13.016H170.239L170.431 11.96C170.537 11.2987 170.484 10.84 170.271 10.584C170.057 10.328 169.62 10.2 168.959 10.2H166.399C165.865 10.2 165.481 10.296 165.247 10.488C165.033 10.68 164.884 11.0427 164.799 11.576L164.735 12.024H158.463L158.687 10.648C158.964 8.89867 159.54 7.66133 160.415 6.936C161.311 6.21067 162.633 5.848 164.383 5.848H171.935ZM166.303 19.064C167.135 19.064 167.871 18.84 168.511 18.392L169.407 17.752L169.567 16.856L169.695 16.152H164.639C164.169 16.152 163.839 16.2373 163.647 16.408C163.476 16.5573 163.348 16.8667 163.263 17.336L163.167 17.816C163.103 18.2853 163.145 18.616 163.295 18.808C163.444 18.9787 163.764 19.064 164.255 19.064H166.303ZM183.7 23C179.625 23 177.94 20.952 178.644 16.856L179.604 11.352C179.945 9.304 180.596 7.87467 181.556 7.064C182.537 6.25333 184.052 5.848 186.1 5.848H193.044C197.076 5.848 198.761 7.896 198.1 11.992L197.908 13.24H191.668L191.732 12.76C191.817 12.0987 191.753 11.64 191.54 11.384C191.326 11.128 190.889 11 190.228 11H187.828C187.166 11 186.697 11.1173 186.42 11.352C186.164 11.5653 185.982 12.0027 185.876 12.664L185.268 16.088C185.161 16.7493 185.214 17.208 185.428 17.464C185.662 17.72 186.11 17.848 186.772 17.848H189.172C189.833 17.848 190.292 17.7413 190.548 17.528C190.825 17.2933 191.017 16.8453 191.124 16.184L191.252 15.448H197.492L197.14 17.496C196.777 19.5653 196.116 21.0053 195.156 21.816C194.196 22.6053 192.692 23 190.644 23H183.7ZM222.554 5.848L213.594 14.488L219.738 23H211.802L206.778 15.032L205.37 23H198.842L202.81 0.599998H209.338L207.034 13.624L214.074 5.848H222.554ZM236.06 5.848C238.086 5.848 239.505 6.34933 240.316 7.352C241.126 8.33333 241.361 9.848 241.02 11.896L240.444 15.352H227.772L227.58 16.408C227.473 17.0693 227.516 17.528 227.708 17.784C227.921 18.04 228.358 18.168 229.02 18.168H232.348C232.881 18.168 233.254 18.072 233.468 17.88C233.681 17.688 233.841 17.3253 233.948 16.792L234.012 16.44H240.252L239.932 18.168C239.612 19.9387 239.025 21.1867 238.172 21.912C237.318 22.6373 236.028 23 234.3 23H225.98C221.948 23 220.283 20.9733 220.988 16.92L221.948 11.416C222.289 9.368 222.95 7.928 223.932 7.096C224.934 6.264 226.46 5.848 228.508 5.848H236.06ZM228.411 11.64L228.348 12.088H234.78L234.844 11.704C234.95 11.0427 234.897 10.5947 234.684 10.36C234.492 10.104 234.065 9.976 233.404 9.976H230.364C229.724 9.976 229.265 10.0933 228.988 10.328C228.71 10.5627 228.518 11 228.411 11.64ZM256.373 5.848H257.749L256.629 11.928H253.397C252.309 11.928 251.455 12.1627 250.837 12.632L250.005 13.24L248.277 23H241.78L244.821 5.848H249.461L249.685 8.12C250.922 7.13867 251.946 6.52 252.757 6.264C253.567 5.98667 254.773 5.848 256.373 5.848Z"
        fill="white"
      />
    </svg>
  ),
  error: (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0123 8.68516V11.0185M12.0123 15.6852V15.6968M3.84556 20.3518H20.1789C20.5596 20.3492 20.9338 20.2534 21.269 20.0729C21.6042 19.8923 21.8901 19.6325 22.1018 19.3161C22.3135 18.9997 22.4446 18.6363 22.4836 18.2576C22.5226 17.8789 22.4683 17.4964 22.3256 17.1435L14.0422 2.85185C13.8404 2.48714 13.5446 2.18315 13.1856 1.97146C12.8266 1.75978 12.4174 1.64813 12.0006 1.64813C11.5838 1.64813 11.1746 1.75978 10.8155 1.97146C10.4565 2.18315 10.1607 2.48714 9.95889 2.85185L1.67556 17.1435C1.53549 17.4884 1.47995 17.8617 1.51357 18.2324C1.54719 18.603 1.66899 18.9603 1.86882 19.2743C2.06864 19.5883 2.34069 19.85 2.66224 20.0374C2.98379 20.2249 3.34552 20.3327 3.71723 20.3518"
        stroke="#EB0237"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  refresh: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0853 2.4375C7.89235 2.4375 3.62334 6.40576 3.2071 11.4653H2.16653C1.83732 11.4653 1.54065 11.6639 1.41527 11.9683C1.28988 12.2727 1.36057 12.6227 1.59427 12.8546L3.41406 14.6601C3.73084 14.9744 4.24181 14.9744 4.55859 14.6601L6.37838 12.8546C6.61208 12.6227 6.68277 12.2727 6.55738 11.9683C6.432 11.6639 6.13533 11.4653 5.80612 11.4653H4.83887C5.25023 7.31431 8.78003 4.0625 13.0853 4.0625C16.0856 4.0625 18.7119 5.64249 20.1667 8.00886C20.4017 8.39113 20.9021 8.51051 21.2844 8.2755C21.6667 8.04049 21.7861 7.54009 21.551 7.15782C19.8108 4.32713 16.6694 2.4375 13.0853 2.4375Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M22.5779 11.3388C22.2614 11.0259 21.7521 11.0259 21.4356 11.3388L19.6088 13.1443C19.3745 13.376 19.3032 13.7262 19.4284 14.031C19.5536 14.3357 19.8505 14.5347 20.18 14.5347H21.154C20.741 18.6834 17.1989 21.9375 12.873 21.9375C9.85862 21.9375 7.22136 20.3562 5.76113 17.99C5.52547 17.6081 5.02486 17.4896 4.64299 17.7252C4.26112 17.9609 4.1426 18.4615 4.37826 18.8434C6.12525 21.6742 9.27774 23.5625 12.873 23.5625C18.0815 23.5625 22.3681 19.5967 22.7859 14.5347H23.8335C24.163 14.5347 24.4599 14.3357 24.5851 14.031C24.7103 13.7262 24.639 13.376 24.4047 13.1443L22.5779 11.3388Z"
        fill="white"
      />
    </svg>
  ),
  arrow: (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.57157 6.09242L7.00588 6.6581L6.4402 6.09242L1.91353 1.56575C1.78113 1.43335 1.53854 1.42344 1.38461 1.56942C1.24566 1.71222 1.24687 1.93801 1.38824 2.07938L6.74323 7.43438C6.88581 7.57696 7.11428 7.57696 7.25686 7.43438L12.6119 2.07938C12.7544 1.9368 12.7544 1.70833 12.6119 1.56575C12.4693 1.42317 12.2408 1.42317 12.0982 1.56575L7.57157 6.09242Z"
        fill="white"
        stroke="white"
        strokeWidth="1.6"
      />
    </svg>
  ),
  avatar: avatar,
  arrowFilter: (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.932 0.815674H1.06536C0.265359 0.815674 -0.134642 1.78234 0.432025 2.34901L4.74869 6.66567C5.44036 7.35734 6.56536 7.35734 7.25703 6.66567L8.89869 5.02401L11.5737 2.34901C12.132 1.78234 11.732 0.815674 10.932 0.815674Z"
        fill="white"
      />
    </svg>
  ),
  vs: vs,
}

export const getImageByKey = (key: ImageKey) => {
  return images[key] ?? null
}
