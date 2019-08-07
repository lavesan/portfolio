import styled from 'styled-components';

export const StyledApp = styled.div`
width: 60%;
margin: 0 auto;
min-width: 300px;
padding: 225px 0 50px 0;
font-size: 1.2rem;
font-family: ${({ theme }) => theme.fontFamily};
.green-title {
  color: ${({ theme }) => theme.success.terciaryColor};
}
.title {
  color: ${({ theme }) => theme.neutral.primaryColor};
  text-decoration: none;
}
.subtitle {
  color: ${({ theme }) => theme.neutral.secondaryColor};
  text-decoration: none;
}
.text {
  color: ${({ theme }) => theme.neutral.terciaryColor};
  text-decoration: none;
}

.link-icon {
  text-decoration: none;
}

.whatsapp-icon:hover {
  color: ${({ theme }) => theme.whatsappColor};
}
.telegram-icon:hover {
  color: ${({ theme }) => theme.telegramColor};
}
.github-icon:hover {
  color: ${({ theme }) => theme.githubColor};
}
.linkedin-icon:hover {
  color: ${({ theme }) => theme.linkedinColor};
}

@media(max-width: 765px) {
  .whatsapp-icon {
    color: ${({ theme }) => theme.whatsappColor};
  }
  .telegram-icon {
    color: ${({ theme }) => theme.telegramColor};
  }
  .github-icon {
    color: ${({ theme }) => theme.githubColor};
  }
  .linkedin-icon {
    color: ${({ theme }) => theme.linkedinColor};
  }
}
`;