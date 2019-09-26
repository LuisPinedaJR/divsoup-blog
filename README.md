<!-- START -->

September 2019

DIVSOUP BLOG BUILT WITH GATSBY + MDX AND STYLED WITH EMOTION CSS.

9/24 - started with GatsbyJS blog started but gutted things I wont use; image component, layout css file. Also cleared out entire code for layoutJS, headeJS files and started with clean file.

9/25 @ 12AM - added new styling to headerJS file. Imported css and styled from emotion core/styled and created a styled component for nav link within header. Added border styling to the link that a user is currently on by adding &.current-page to navlink styled component and giving it an activeClassName of current-page.
I create a template string ( font-weight: \${props => props.fontWeight || 'normal'} ) for fontweight to make it a little more flexible; this was just a bit of fun it was not necessary to add this.

9/25 - added hook to get metadata instead of hard coding.

9/26 @ 2AM - added a wave button, this was just a test to see if I could use useState + emoji. It works! This will be a button for either contact form or something fun inside the new mdx page I created 'contact.mdx'

<!-- END -->
